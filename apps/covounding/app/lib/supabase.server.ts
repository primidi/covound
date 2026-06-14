import { createClient } from "@supabase/supabase-js";

export function getSupabaseClient(env: any = {}) {
  const url = env.SUPABASE_URL || process.env.SUPABASE_URL || "";
  const key = env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  return createClient(url, key, {
    auth: {
      persistSession: false,
    },
  });
}
