import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://ejaifvnalestgqmswdgy.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYWlmdm5hbGVzdGdxbXN3ZGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNTU5MzEsImV4cCI6MTk4MzkzMTkzMX0.PHxAYYdcfiAogcYa13vohiViZww_AR1O24Rbt3UKiFs";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService () {
    return {
        getAllVideos() {
            return supabase.from("video")
            .select("*");
            
        }
    }
}