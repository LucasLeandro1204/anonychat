<template>
  <aside class="w-full">
    <form class="px-2 py-4 flex">
      <button type="submit" class="text-xl pl-3">
        <i class="fa fa-search text-grey-dark foo-kkkk hover:text-grey-darkest"></i>
      </button>
      <input type="text" placeholder="Search" class="px-3 mr-3 w-full text-grey-dark text-sm font-medium">
    </form>
    <div class="flex flex-col">
      <div class="flex border-b p-4 items-center" v-for="i in 10" :key="i">
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" class="rounded-full w-auto h-12">
        <div class="flex flex-col ml-2">
          <p class="font-sans">My friends too <span>5 hours</span></p>
          <ul class="list-reset flex flex-wrap text-xs">
            <li v-for="i in 8" :key="i" class="text-white bg-red-light px-2 py-1 mr-1 mt-1 rounded-full">Friends</li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>
