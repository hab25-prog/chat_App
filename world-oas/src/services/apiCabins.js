import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Error fetching cabins:", error);
  }
  return data;
}

export async function createCabin(cabin) {
  const { data, error } = await supabase.from("cabins").insert([cabin]);
  if (error) {
    console.error("Error creating cabin:", error);
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error("Error deleting cabin:", error);
  }
  return data;
}
