import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qtxqboqafglrwidencrl.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0eHFib3FhZmdscndpZGVuY3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NjQ2MDAsImV4cCI6MjA2NzI0MDYwMH0.lM2QoGqj02GydgNl0GfpYSdgmhjsM8d97XKpLZcfMNg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Example functions for common operations
export const supabaseHelpers = {
  // Add a new Fighter
  async addFighter(FighterData) {
    const { data, error } = await supabase
        .from('Fighters')
        .insert({...FighterData})
        .select()
    if (error|| data===null) throw error
    return data
  },
}

// For direct database connection (if needed)
export const databaseUrl = 'postgresql://postgres:Frederick7@db.qtxqboqafglrwidencrl.supabase.co:5432/postgres' 