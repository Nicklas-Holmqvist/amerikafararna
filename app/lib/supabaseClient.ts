import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  `https://lltimspejsnniuckprjy.supabase.co`,
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsdGltc3BlanNubml1Y2twcmp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwMTE3MjAsImV4cCI6MjAyODU4NzcyMH0.lkJ_u49IpwmuSg6CYh5yZbkgEF0cWDakmHPXMv0Pjdc`
);
