<script lang="ts">
	import { page } from '$app/stores';
	import { firestore } from '$lib/firebase';
	import type { ProductData } from '$lib/firebase';
	import { doc, getDoc } from 'firebase/firestore';

	const linkProduct: string = $page.params.product;
	const productName: string = linkProduct.replace(/_/g, ' ').replace(/PROCENT/g, '%');

	let product: ProductData | undefined;

	const getProductData = async () => {
		try {
			const productRef = doc(firestore, 'products', productName);
			const docum = await getDoc(productRef);

			if (docum.exists!) {
				product = docum.data() as ProductData;
			} else {
				console.error('Product not found');
			}
		} catch (error) {
			console.error('Error fetching product data:', error);
		}
	};

	$: getProductData();
</script>

<svelte:head>
	{#if product !== undefined}
		<title>{product.name}</title>
	{:else}
		<title>Loading...</title>
	{/if}
</svelte:head>

{#if product !== undefined}
	<div class="product-container">
		<div class="image-container">
			<img src={`images/${linkProduct}.png`} alt={product.name} />
		</div>
		<article class="details-container">
			<h3>{product.name}</h3>
			<p>{product.price}$ / {product.quantity}{product.unit}</p>
			<p>{product.compound}</p>
			<p>{product.manufacturer}</p>
		</article>
	</div>
{:else}
	<h2>Loading...</h2>
{/if}

<style lang="scss">
	.product-container {
		display: flex;
	}
	.image-container img {
		max-width: 70vw;
		max-height: 90vh;
		margin: 12px 8px;
	}
	.details-container {
		margin: 16px 8px;
	}

	@media screen and (max-width: 1000px) {
		.product-container {
			display: block;
		}
		.image-container img {
			max-width: calc(100vw - 16px);
			max-height: 80vh;
			margin: 12px 8px;
		}
		.details-container {
			margin: -8px 8px 0;
		}
	}
</style>
