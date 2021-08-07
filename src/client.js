import { createClient } from '@supabase/supabase-js'
require('dotenv').config()
const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

export const supabase = createClient(
  API_URL,API_KEY
)