import mongoose from "mongoose";



const TenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Tenant = mongoose.model("Tenant", TenantSchema);
// const Product = mongoose.model("Product", ProductSchema);

export default Tenant

