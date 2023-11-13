<script lang="ts">
	import { onMount } from 'svelte';
	import { firestore } from '$lib/firebase';
	import Product from '$lib/product.svelte';
	import type { ProductData } from '$lib/firebase';
	import { collection, onSnapshot } from 'firebase/firestore';
	import type { DocumentData } from 'firebase/firestore';

	let products: ProductData[] = [];

	const handleSnapshot = (doc: DocumentData) => {
		const productData = doc.data() as ProductData;
		products = [...products, productData];
	};

	let productsCollectionRef = collection(firestore, 'products');

	const unsubscribe = onSnapshot(productsCollectionRef, (snapshot) => {
		snapshot.docChanges().forEach((change) => {
			if (change.type === 'added') {
				handleSnapshot(change.doc);
			}
		});
	});

	onMount(() => {
		return () => {
			unsubscribe();
		};
	});
</script>

<svelte:head>
	<title>Product Shop</title>
</svelte:head>

{#if products.length === 0}
	<h2 id="title">Loading...</h2>
{:else}
	<h2 id="title">Products:</h2>
	<div class="products-container">
		{#each products as product}
			<Product {product} />
		{/each}
	</div>
{/if}

<style lang="scss">
	#title {
		margin: 16px 16px 0;
	}

	.products-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		place-items: center;
	}

	@media screen and (max-width: 1799px) {
		.products-container {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media screen and (max-width: 1199px) {
		.products-container {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media screen and (max-width: 599px) {
		.products-container {
			grid-template-columns: 1fr;
		}
	}
</style>
