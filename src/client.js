import { createClient } from '@supabase/supabase-js';
require('dotenv').config()



export const supabase = createClient(
  process.env.REACT_APP_API_URL,process.env.REACT_APP_API_KEY
)