import rentacar from './assets/rent-a-car.jpg';
import realestate from './assets/real-estate.jpg';
import ac from './assets/ac.jpg';
import contracting from './assets/contracting.jpg';
import trading from './assets/trading.jpg';
import waste from './assets/waste.jpg';
import cleaning from './assets/cleaning.jpg';
import welding from './assets/welding.jpg';
import painting from './assets/painting.jpg';
import plastering from './assets/plastering.jpg';
import gypsum from './assets/gypsum.jpg';
import plumbing from './assets/plumbing.jpg';
import water from './assets/water-proffing.jpg';
import kitchen from './assets/kitchen-cabinet.jpg';
import furniture from './assets/furniture.jpg';
import gardening from './assets/gardening.jpg';
import staffAccomodation from './assets/staffAccomodation.jpeg';
import studio from './assets/studio.jpeg';
import warehouse from './assets/warehouse.jpeg';
// studio imports
import studio1 from './assets/studio/studio1.jpeg';
import studio2 from './assets/studio/studio2.jpeg';
import studio3 from './assets/studio/studio3.jpeg';
import studio4 from './assets/studio/studio4.jpeg';
import studio5 from './assets/studio/studio5.jpeg';
import studio6 from './assets/studio/studio6.jpeg';
import studio7 from './assets/studio/studio7.jpeg';
import studio8 from './assets/studio/studio8.jpeg';
import studio9 from './assets/studio/studio9.jpeg';
import studio10 from './assets/studio/studio10.jpeg';
import studio11 from './assets/studio/studio11.jpeg';
import studio12 from './assets/studio/studio12.jpeg';
import studio13 from './assets/studio/studio13.jpeg';
// staffaccomodation
import staff1 from './assets/staffaccomodation/staff1.jpeg';
import staff2 from './assets/staffaccomodation/staff2.jpeg';
import staff3 from './assets/staffaccomodation/staff3.jpeg';
import staff4 from './assets/staffaccomodation/staff4.jpeg';
import staff5 from './assets/staffaccomodation/staff5.jpeg';
import staff6 from './assets/staffaccomodation/staff6.jpeg';
import staff7 from './assets/staffaccomodation/staff7.jpeg';
// warehouse
import warehouse1 from './assets/warehouse/warehouse1.jpeg';
import warehouse2 from './assets/warehouse/warehouse2.jpeg';
import warehouse3 from './assets/warehouse/warehouse3.jpeg';

const servicesData = [
    {
        img: rentacar,
        title: 'Rent a Car',
        subServices: [
            {img: rentacar, title: 'Rental Cars'},]
    },
    {
        img: realestate,
        title: 'Real-Estate',
        subServices: [
            {img: staffAccomodation, title: 'Studio', images: [
                {img: staff1},
                {img: staff2},
                {img: staff3},
                {img: staff4},
                {img: staff5},
                {img: staff6},
                {img: staff7},
            ]},
            {img: warehouse, title: 'Warehouse/Stores', images: [
                {img: warehouse1},
                {img: warehouse2},
                {img: warehouse3},
            ]},
            {img: studio, title: 'Staff Accomodation', images: [
                {img: studio1},
                {img: studio2},
                {img: studio3},
                {img: studio4},
                {img: studio5},
                {img: studio6},
                {img: studio7},
                {img: studio8},
                {img: studio9},
                {img: studio10},
                {img: studio11},
                {img: studio12},
                {img: studio13},
            ]},
            // {img: rentacar, title: 'Family Accomodation'},
            // {img: gardening, title: 'Bachlor Accomodation'},
            // {img: furniture, title: 'Labour Camp'},
            // {img: furniture, title: 'Stores/Updowns'},
        ]
    },
    {
        img: ac,
        title: 'AC Repairs'
    },
    {
        img: contracting,
        title: 'Contracting & Maintenance Work'
    },
    {
        img: trading,
        title: 'Trading'
    },
    {
        img: waste,
        title: 'Sawage Water & Waste Removal'
    },
    {
        img: cleaning,
        title: 'Cleaning Service'
    },
    {
        img: welding,
        title: 'Welding Works'
    },
    {
        img: painting,
        title: 'Painting Works'
    },
    {
        img: plastering,
        title: 'Plastering, Tiles & Granite Works'
    },
    {
        img: gypsum,
        title: 'Gypsum Works'
    },
    {
        img: plumbing,
        title: 'Electrical & Plumbing',
        subTitle: 'Works'
    },
    {
        img: water,
        title: 'Water Proofing Works'
    },
    {
        img: kitchen,
        title: 'Kitchen Cabinet Works'
    },
    {
        img: furniture,
        title: 'Furniture’s Supply'
    },
    {
        img: gardening,
        title: 'Gardening'
    },
];

export default servicesData;