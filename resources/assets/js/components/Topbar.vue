<script>
  import { toggleSidebar } from 'core/mixins';

  export default {
    mixins: [
      toggleSidebar,
    ],
  };
</script>

<template>
  <header class="bg-purple-dark shadow-lg pin-t absolute w-full">
    <div class="p-3 flex items-center text-white">
      <button @click.prevent="toggleSidebar">
        <i class="fa fa-bars text-white"></i>
      </button>
      <h1 class="font-sans mx-auto">
        <i class="fa fa-comments mr-1"></i>Anonychat
      </h1>
    </div>
  </header>
</template>
