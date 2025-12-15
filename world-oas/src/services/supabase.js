import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zjhtmdywfkrahprlvwhl.supabase.co";
const supabaseKey = "sb_publishable_EkqkCD1XfHeUKPBdTJabLA_mPFp_-n1";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
