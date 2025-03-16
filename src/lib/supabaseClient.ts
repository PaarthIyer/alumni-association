import { createClient } from '@supabase/supabase-js'

const PUBLIC_SUPABASE_URL = 'https://jjsxgilfjuombykmbdxj.supabase.co'
const PUBLIC_SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqc3hnaWxmanVvbWJ5a21iZHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2NTQ0MDQsImV4cCI6MjA1NTIzMDQwNH0.nvUn7KszyMNir5FA0MpGQIZsvncf3eq1dzVfEbeg38M'

const supabaseUrl = PUBLIC_SUPABASE_URL
const supabaseKey = PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
