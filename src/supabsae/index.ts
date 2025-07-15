import { createClient, SupabaseClient } from '@supabase/supabase-js'

class Supabase {
  private url = import.meta.env.VITE_SUPABASE_URL;
  private key = import.meta.env.VITE_SUPABASEK_KEY;
  private _supabase: SupabaseClient;
  constructor() {
    this._supabase = createClient(this.url, this.key);
  }

  get supabase() {
    return this._supabase;
  }
}

export default Supabase;