pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out current branch..."
                checkout scm
            }
        }

        stage('Set Target Environment') {
            steps {
                script {
                    def branch = env.BRANCH_NAME ?: env.GIT_BRANCH ?: 'main'
                    echo "Branch detected: ${branch}"

                    if (branch.contains('main') || branch.contains('master')) {
                        env.DEPLOY_PATH = '/var/www/ms'
                        env.ENV_NAME = 'PRODUCTION'
                    } else {
                        // PRs or feature branches (Build & Validate without deployment)
                        env.DEPLOY_PATH = ''
                        env.ENV_NAME = 'PR_BUILD'
                    }
                    echo "Target Environment: ${env.ENV_NAME} | Deployment Webroot: ${env.DEPLOY_PATH}"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies with Bun...'
                sh '''
                    export BUN_INSTALL="$HOME/.bun"
                    export PATH="$BUN_INSTALL/bin:$PATH"

                    bun install
                '''
            }
        }

        stage('Build Project') {
            steps {
                echo "Building web assets for ${env.ENV_NAME} with Bun..."
                sh '''
                    export BUN_INSTALL="$HOME/.bun"
                    export PATH="$BUN_INSTALL/bin:$PATH"

                    bun run build
                '''
            }
        }

        stage('Deploy to Production Webroot') {
            when {
                expression { env.DEPLOY_PATH != '' }
            }
            steps {
                echo "Deploying production build output (dist/*) to ${env.DEPLOY_PATH}..."
                sh """
                    # Ensure target Nginx directory exists
                    sudo mkdir -p ${env.DEPLOY_PATH}

                    # Sync built assets into production webroot (/var/www/ms)
                    if [ -d "dist" ]; then
                        sudo rsync -av --delete dist/ ${env.DEPLOY_PATH}/
                    else
                        echo "Error: dist directory not found!"
                        exit 1
                    fi

                    # Set appropriate Nginx owner & permission settings
                    sudo chown -R www-data:www-data ${env.DEPLOY_PATH} || true
                    sudo chmod -R 755 ${env.DEPLOY_PATH} || true

                    # Reload Nginx web server
                    sudo systemctl reload nginx || sudo service nginx reload || true
                """
            }
        }
    }

    post {
        success {
            echo "✅ Build & Deployment for ${env.ENV_NAME} completed successfully with Bun!"
        }
        failure {
            echo '❌ Pipeline build failed! Check build logs for details.'
        }
    }
}
