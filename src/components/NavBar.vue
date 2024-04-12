<script setup>
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import Button from './ui/button/Button.vue'
import NavMenu from '@/components/NavMenu.vue'
</script>

<template>
  <nav class="flex justify-between mx-auto lg:max-w-[75rem] items-center p-5 px-8 fixed inset-x-0">
    <h1 class="text-3xl font-bold">Blogs</h1>
    <NavMenu />
    
    <div class="hidden">
      <Sheet>
        <SheetTrigger>
          <Button size="icon">O</Button>
        </SheetTrigger>
        <SheetContent class="w-[300px] sm:w-[540px] pt-10">
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  </nav>
</template>
