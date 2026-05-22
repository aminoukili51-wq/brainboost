import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://wsefzcyxgnfdcvylfoae.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzZWZ6Y3l4Z25mZGN2eWxmb2FlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTQ2OTg4MSwiZXhwIjoyMDk1MDQ1ODgxfQ.AcfVTJHlUvx3AOVCSET3rF_NWdIGymyIgmBQcl4_JwQ"
);