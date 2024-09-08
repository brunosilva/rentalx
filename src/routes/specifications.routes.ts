import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/specification/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificatinService = new CreateSpecificationService(specificationsRepository);

  createSpecificatinService.execute({ name, description });

  return response.status(201).send();
})

export { specificationsRoutes };
