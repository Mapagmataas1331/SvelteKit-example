import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyB5qDPAnh5KWKkdbnBnhAAs3bgECeq-vig',
	authDomain: 'test-project-for-examples.firebaseapp.com',
	projectId: 'test-project-for-examples',
	storageBucket: 'test-project-for-examples.appspot.com',
	messagingSenderId: '840985306092',
	appId: '1:840985306092:web:390902287ea9721a27d6c9'
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export interface ProductData {
	name: string;
	price: number;
	quantity: number;
	unit: string;
	compound: string;
	manufacturer: string;
}

const productsCollectionRef = collection(firestore, 'products');

const productsData: ProductData[] = [
	{
		name: 'Milk 2.5% pasteurized Tomsk Milk',
		price: 1.24,
		quantity: 900,
		unit: 'ml',
		compound: 'Whole milk, skimmed milk.',
		manufacturer: 'Tomsk Milk LLC'
	},
	{
		name: 'Hard cheese Brucke Creamy 50%',
		price: 10.78,
		quantity: 1000,
		unit: 'g',
		compound:
			'Pasteurized whole milk, pasteurized skimmed milk, table salt, using mesophilic lactic acid microorganisms, thermophilic milk sticks, milk clotting enzyme preparation of animal origin, potassium nitrate preservative E 252',
		manufacturer: 'Brucke LLC'
	},
	{
		name: 'Sour cream Irmen 10% Fat Free',
		price: 1.04,
		quantity: 400,
		unit: 'g',
		compound: 'Cream, fermentation microorganisms.',
		manufacturer: 'Irmen Farm LLC'
	},
	{
		name: 'Butter Kiprino Altai 82%',
		price: 3.14,
		quantity: 180,
		unit: 'g',
		compound: 'Pasteurized cream.',
		manufacturer: 'Kiprinsky Dairy LLC'
	},
	{
		name: 'Chicken fillet Home Kitchen Chilled',
		price: 5.36,
		quantity: 1000,
		unit: 'g',
		compound: '',
		manufacturer: 'Sibir DK LLC'
	},
	{
		name: 'Beef on the bone for stewing Chilled',
		price: 5.07,
		quantity: 1000,
		unit: 'g',
		compound: '',
		manufacturer: 'Sibir DK LLC'
	},
	{
		name: 'Boiled sausage SPK Doctoral',
		price: 2.99,
		quantity: 470,
		unit: 'g',
		compound:
			'Pork, beef, water, egg powder, dry milk, nitrite-salt mixture (salt, color fixative: sodium nitrite), sugar, spices (nutmeg), stabilizer (E450), flavor enhancer (E621), acidity regulator (E451), antioxidant (ascorbic acid).',
		manufacturer: 'Siberian Food Company LLC'
	},
	{
		name: 'Sausages Trade Square Bavarian Boiled',
		price: 2.59,
		quantity: 350,
		unit: 'g',
		compound:
			'Hand-peeled chicken meat, water, pork rind, pork, cheese (whole milk, skimmed milk, starter, salt, hardener-E508, preservative-E249, colorant-E160b), wheat starch, egg melange, nitrite-salt mixture (salt, color fixative-E250), dry whey, dry skimmed milk, salt, acidity regulators (E450, E451, E452), spices and spice extracts (coriander, black pepper), flavoring, flavor enhancer (E621), antioxidant (ascorbic acid), thickeners (E407, E407a, E412, E425, E415), food coloring (E120).',
		manufacturer: 'Trade Square TD LLC'
	},
	{
		name: 'Short cucumbers',
		price: 1.44,
		quantity: 1000,
		unit: 'g',
		compound: '',
		manufacturer: 'Bytron'
	},
	{
		name: 'White onion',
		price: 0.33,
		quantity: 1000,
		unit: 'g',
		compound: '',
		manufacturer: 'Bytron'
	},
	{
		name: 'Red Chief Apples',
		price: 1.7,
		quantity: 1000,
		unit: 'g',
		compound: '',
		manufacturer: 'Bytron'
	},
	{
		name: 'Bread Home Kitchen Wheat',
		price: 0.39,
		quantity: 450,
		unit: 'g',
		compound:
			'High-grade flour, water, table margarine, sugar, dry milk, salt, vegetable oil, yeast, baking improver.',
		manufacturer: 'Sibir DK LLC'
	},
	{
		name: 'Barilla Penne Rigate No. 73 Pasta',
		price: 1.7,
		quantity: 450,
		unit: 'g',
		compound: 'Flour from hard wheat, water.',
		manufacturer: 'Barilla Rus LLC'
	},
	{
		name: 'Karachinskaya Sparkling Mineral Water',
		price: 0.44,
		quantity: 500,
		unit: 'ml',
		compound:
			'Hydrocarbonate ions 800-1100, Sulfate 150-250, Chloride ions 0-600, Calcium <25, Magnesium.',
		manufacturer: 'Karachinsky Source LLC'
	},
	{
		name: 'Lipton Green Cold Tea',
		price: 2.72,
		quantity: 1500,
		unit: 'ml',
		compound:
			'Water, sugar, fructose, green tea extract, acidity regulators (citric acid, 3-substituted sodium citrate), natural flavor, preservatives (potassium sorbate, dimethyldicarbonate), antioxidant ascorbic acid.',
		manufacturer: 'PepsiCo, Inc.'
	},
	{
		name: 'Barrel Cola Carbonated Beverage',
		price: 1.54,
		quantity: 1300,
		unit: 'ml',
		compound:
			'Prepared drinking water, sugar, natural flavoring, sugar color IV, gum arabic stabilizer, flavoring, orthophosphoric acid acidity regulator, caffeine, sodium benzoate preservative.',
		manufacturer: 'Bochkarevsky Brewery LLC'
	}
];

productsData.forEach(async (productData) => {
	const productDocRef = doc(productsCollectionRef, productData.name);
	await setDoc(productDocRef, productData);
});
