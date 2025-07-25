
  const UldTypeLabels = {
    DEMI: 'DEMI',
    HMA_STALL: 'HMA STALL',
    LD_1: 'LD-1',
    LD_3: 'LD-3',
    LD_3_REEFER: 'LD-3 REEFER',
    LD_4: 'LD-4',
    LD_6: 'LD-6',
    LD_7: 'LD-7',
    LD_7_WITH_ANGLED_WINGS: 'LD-7 WITH ANGLED WINGS',
    LD_7_WITH_FOLDING_WINGS: 'LD-7 WITH FOLDING WINGS',
    LD_8: 'LD-8',
    LD_9: 'LD-9',
    LD_9_REEFER: 'LD-9 REEFER',
    LD_11: 'LD-11',
    LD_26: 'LD-26',
    LD_29: 'LD-29',
    LD_29_REEFER: 'LD-29 REEFER',
    LD_39: 'LD-39',
    MDP: 'MDP',
    M_1: 'M-1',
    M_1H: 'M-1H',
    M_2: 'M-2',
    M_6: 'M-6',
    M_6_118PH: 'M-6 (118ºH)',
    M_6_TWIN_CAR_RACK: 'M-6 TWIN CAR RACK',
    PLA_HALF_PALLET: 'PLA HALF PALLET',
    PMC_FQP_PALLET: 'PMC/P6P PALLET',
    PNA_HALF_PALLET: 'PNA HALF PALLET',
    TYPE_A_PEN: 'TYPE A PEN',
  };

  function getUldTypeLabel(value) {
    return UldTypeLabels[value] || 'Unknown';
  }
  
  

  
  const ShipTypeLabels = {
    ASPHALT_CARRIERS: 'Asphalt Carriers',
    BREAK_BULK_CARRIER: 'Break Bulk Carrier',
    CHEMICAL_TANKER: 'Chemical Tanker',
    CONTAINERSHIP: 'Containership',
    CRUDE_CARRIER: 'Crude Carrier',
    GAS_CARRIER: 'Gas Carrier',
    GENERAL_CARGO_VESSEL: 'General Cargo Vessel',
    HEAVY_LIFT: 'Heavy-lift',
    LIVESTOCK: 'Livestock',
    PRODUCT_TANKER: 'Product Tanker',
    REFRIGERATED: 'Refrigerated',
    RO_RO: 'Ro/Ro',
  };
  
  function getShipTypeLabel(value) {
    return ShipTypeLabels[value] || 'Unknown';
  }
  

  
  const CargoCategoryLabels = {
    ANY_OTHER: 'Any other',
    E_COMMERCE_CARGO: 'E-commerce Cargo',
    GENERAL_CARGO: 'General Cargo',
    HAZARDOUS_CARGO: 'Hazardous Cargo',
    PERSONAL_EFFECT: 'Personal Effect',
    REEFER_CARGO: 'Reefer Cargo',
    SPECIAL_CARGO: 'Special Cargo',
  };

  function getCargoCategoryLabel(value) {
    return CargoCategoryLabels[value] || 'Unknown';
  }

 

  
  const ContainerTypeLabels = {
    BULK_20FT: "20' Bulk",
    FLAT_RACK_20FT: "20' Flatrack",
    FLAT_RACK_40FT: "40' Flatrack",
    FLAT_RACK_COLLAPSIBLE_20FT: "20' Flatrack Collapsible",
    FLAT_RACK_COLLAPSIBLE_40FT: "40' Flatrack Collapsible",
    HIGH_CUBE_40FT: "40' High Cube",
    HIGH_CUBE_45FT: "45' High Cube",
    HIGH_CUBE_48FT: "48' High Cube",
    HIGH_CUBE_53FT: "53' High Cube",
    OPEN_TOP_20FT: "20' Open Top",
    OPEN_TOP_40FT: "40' Open Top",
    PLATFORM_20FT: "20' Platform",
    REFRIGERATED_20FT: "20' Refrigerated",
    REFRIGERATED_40FT: "40' Refrigerated",
    STANDARD_20FT: "20' Standard",
    STANDARD_40FT: "40' Standard",
    TANK_20FT: "20' Tank",
  };
  
  function getContainerTypeLabel(value) {
    return ContainerTypeLabels[value] || 'Unknown';
  }



  const PackagingTypeLabels = {
    BAG: 'Bag',
    BARRELS: 'Barrels',
    CARTON: 'Carton',
    DRUMS_HDPE: 'Drums HDPE',
    DRUMS_STEEL: 'Drums Steel',
    OTHER: 'Other',
    PALLETS: 'Pallets',
  };

  function getPackagingTypeLabel(value) {
    return PackagingTypeLabels[value] || 'Unknown';
  }
  
  
  const FreighterTypeLabels = {
    AIRBUS_A320: 'Airbus A320',
    AIRBUS_A330_200F: 'Airbus A330-200F',
    ANTONOV_AN_124_RUSLAN: 'Antonov An-124 Ruslan',
    BOEING_737: 'Boeing 737',
    BOEING_747_8F: 'Boeing 747-8F',
    BOEING_777F: 'Boeing 777F',
  };
  
  function getFreighterTypeLabel(value){
    return FreighterTypeLabels[value] || 'Unknown';
  }
  
  

  


  

  export { getShipTypeLabel, getCargoCategoryLabel, getContainerTypeLabel, getFreighterTypeLabel, getPackagingTypeLabel, getUldTypeLabel };
  