import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mlupwafvacqddtfnuwuf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sdXB3YWZ2YWNxZGR0Zm51d3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NjIzNTMsImV4cCI6MjA3MDEzODM1M30.YmHMRW25tfsqSSFEuZmMg6lBiHw2IiM-qcfvgI8OUG4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
