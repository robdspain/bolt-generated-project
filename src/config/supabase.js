import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vlendoltfgcmghkxxdsn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsZW5kb2x0ZmdjbWdoa3h4ZHNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MzE0NTEsImV4cCI6MjA1NDQwNzQ1MX0.zjTW4aVNwFhrTAIcCDW-X2n55E2SC9pWxpNI0RNlpKw';

export const supabase = createClient(supabaseUrl, supabaseKey);
