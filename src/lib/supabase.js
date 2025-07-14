import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sapumbcgitgrzpeyimic.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcHVtYmNnaXRncnpwZXlpbWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0Mzk0MTMsImV4cCI6MjA2ODAxNTQxM30.eEWB3evMRrr8HBkLZEtu0dm0aFIUquMpDhusQq2Xp9s'

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
  // Add a new Fighter
  async addTrainer(TrainerData) {
    const { data, error } = await supabase
        .from('Trainers')
        .insert({...TrainerData})
        .select()
    if (error|| data===null) throw error
    return data
  },
  // Add a new Contact Message
  async addContact(ContactData) {
    const { data, error } = await supabase
        .from('Contact')
        .insert({...ContactData})
        .select()
    if (error|| data===null) throw error
    return data
  },
  // Add a new Training Location
  async addLocation(LocationData) {
    const { data, error } = await supabase
        .from('Location')
        .insert({...LocationData})
        .select()
    if (error|| data===null) throw error
    return data
  },
}

// For direct database connection (if needed)
// export const databaseUrl = 'postgresql://postgres:Frederick7@db.qtxqboqafglrwidencrl.supabase.co:5432/postgres'
// export const fighterDatabaseUrl ='postgresql://postgres:[YOUR-PASSWORD]@db.sapumbcgitgrzpeyimic.supabase.co:5432/postgres'
