/* Picking up previous section's example */
module type EstablishmentType = {
  type profession;
  let getProfession: profession => string;
};
