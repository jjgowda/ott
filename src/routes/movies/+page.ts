import type { PageLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const ssr = false;
export const load: PageLoad = async () => {
  const { data, error } = await supabase
    .from('movies')
    .select('id,title,poster,hls_url')
    .order('id', { ascending: false })
    .limit(50);
  return { movies: data ?? [], error: error?.message ?? null };
};