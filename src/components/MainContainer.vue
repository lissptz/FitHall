<template>
	<div class="wrap d-flex flex-column min-vh-100">
		<header>
		<slot name="header"></slot>
		</header>
		<main class="flex-fill">
			<slot>
			</slot>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

