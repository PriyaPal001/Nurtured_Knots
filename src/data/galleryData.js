const bookmarkImages = import.meta.glob(
  "../assets/images/products/book_mark/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const bouquetImages = import.meta.glob(
  "../assets/images/products/Bouquet/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const chargerCoverImages = import.meta.glob(
  "../assets/images/products/charger_cover/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const earbudsCoverImages = import.meta.glob(
  "../assets/images/products/ear_buds_cover/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const glassesCaseImages = import.meta.glob(
  "../assets/images/products/glasses_case/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const headBandImages = import.meta.glob(
  "../assets/images/products/head_band/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const keyChainImages = import.meta.glob(
  "../assets/images/products/key-chains/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const phoneCharmImages = import.meta.glob(
  "../assets/images/products/phone_charm/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const rakhiImages = import.meta.glob(
  "../assets/images/products/rakhi/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const scrunchiesImages = import.meta.glob(
  "../assets/images/products/Scrunchies/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const smallPurseImages = import.meta.glob(
  "../assets/images/products/small_purse/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);


// Convert imported files into gallery objects
function createGallery(images, title) {
  return Object.entries(images)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, image], index) => ({
      id: index + 1,
      name: `${title} ${index + 1}`,
      image,
    }));
}


export const galleryData = {

  bookmark: createGallery(
    bookmarkImages,
    "Bookmark"
  ),

  bouquet: createGallery(
    bouquetImages,
    "Flower Bouquet"
  ),

  "charger-cover": createGallery(
    chargerCoverImages,
    "Charger Cover"
  ),

  "ear-buds-cover": createGallery(
    earbudsCoverImages,
    "Ear Buds Cover"
  ),

  "glasses-case": createGallery(
    glassesCaseImages,
    "Glasses Case"
  ),

  "head-band": createGallery(
    headBandImages,
    "Head Band"
  ),

  "key-chain": createGallery(
    keyChainImages,
    "Key Chain"
  ),

  "phone-charm": createGallery(
    phoneCharmImages,
    "Phone Charm"
  ),

  rakhi: createGallery(
    rakhiImages,
    "Rakhi"
  ),

  scrunchies: createGallery(
    scrunchiesImages,
    "Scrunchies"
  ),

  "small-purse": createGallery(
    smallPurseImages,
    "Small Purse"
  ),
};