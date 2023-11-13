<script lang="ts">
	import type { ProductData } from '$lib/types';
	export let product: ProductData;
	let linkUrl = product.name.replace(/ /g, '_').replace(/%/g, 'PROCENT');
</script>

<div class="product">
	<a href="/{linkUrl}">
		<img src="images/{linkUrl}.png" alt={product.name} />
		<h3>{product.name}</h3>
		<p>{product.price}$</p>
	</a>
</div>

<style lang="scss">
	.product {
		max-width: 620px;
		background: $color-main-8;
		margin: 4px;
		padding: 8px;
		border-radius: 4px;
		box-shadow: $color-main-9 0 2px 8px;

		img {
			width: calc(100% - 16px);
			margin: 8px;
		}

		h3 {
			font-size: 24px;
		}
	}

	@media screen and (min-width: 0px) and (max-width: 1799px) {
		.product {
			h3 {
				font-size: 20px;
			}
		}
	}

	@media screen and (min-width: 0px) and (max-width: 1199px) {
		.product {
			h3 {
				font-size: 16px;
			}
		}
	}

	@media screen and (min-width: 0px) and (max-width: 599px) {
		.product {
			img {
				width: calc(100% - 8px);
				margin: 4px;
			}
			h3 {
				font-size: 14px;
			}
		}
	}
</style>
