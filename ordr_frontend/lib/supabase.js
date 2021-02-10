import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_TOKEN)

export const insertUser = async (uuid, email, username, fullname, restaurant_address, restaurant_phone_number, user_phone_number, user_address, restaurant_description) => {
    const user = {
        uuid,
        email, 
        username,
        fullname,
        restaurant_address,
        restaurant_phone_number,
        user_phone_number,
        user_address,
        restaurant_description
    }

    return  await supabase.from('users').insert([user])
}

export const updateUser = async (uuid, user) => {
    return  await supabase.from('users').update(user).match({ uuid: uuid })
}

export const getUser = async ( uuid ) => {
    return await supabase.from('users').select().match({ uuid }).single()
}
