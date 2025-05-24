import Tenant from "../models/Tenant.js";

export const createTenantService = (body) => Tenant.create(body);
export const findAllTenantsService = () => Tenant.find().sort({ _id: -1 });
