<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem class="hidden md:block">
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="flex flex-col gap-3 p-6 md:w-[300px] lg:w-[400px]">
            <li class="row-span-3">
              <NavigationMenuLink as-child>
                <a
                  class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <img src="https://www.radix-vue.com/logo.svg" class="h-6 w-6" />
                  <div class="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                  <p class="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Radix UI and Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem class="hidden md:block">
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="flex flex-col w-[300px] gap-3 p-4 md:w-[350px]">
            <li v-for="component in components" :key="component.title">
              <NavigationMenuLink>
                <a
                  class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  :href="component.href"
                >
                  <div class="mb-2 text-lg font-medium">{{ component.title }}</div>
                  <p class="text-sm leading-tight text-muted-foreground">
                    {{ component.description }}
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Dialog :open="isDialogOpen" @update:open="toggleDialog">
          <DialogTrigger as-child v-if="!store.isAuthenticated">
            <Button variant="outline">Get Started</Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle class="text-center font-bold text-3xl">Join Blog</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <p class="text-center text-muted-foreground">
                Sign up to get the latest updates and news.
              </p>
            </DialogDescription>

            <CredentialLoginForm @toggle="toggleDialog"/>

            <Separator class="my-4" />
            <div class="flex flex-col gap-3">
              <Button class="flex gap-2">
                <v-icon name="bi-github" />
                Sign up with Github
              </Button>
              <Button class="flex gap-2" variant="outline">
                <v-icon name="bi-google" />
                Sign up with Google
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </NavigationMenuItem>
      <div class="flex gap-2">
        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" size="icon">
                <Icon
                  icon="radix-icons:sun"
                  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Icon
                  icon="radix-icons:moon"
                  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem @click="mode = 'light'">Light</DropdownMenuItem>
              <DropdownMenuItem @click="mode = 'dark'">Dark</DropdownMenuItem>
              <DropdownMenuItem @click="mode = 'auto'">System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
        <NavigationMenuItem v-if="store.isAuthenticated">
          <AvartarDropDown />
        </NavigationMenuItem>
      </div>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup>
import AvartarDropDown from '@/components/AvatarDropDown.vue'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import Button from './ui/button/Button.vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Icon } from '@iconify/vue'
import CredentialLoginForm from '@/components/auth/CredentialLoginForm.vue'
import { useAuthStore } from '@/stores/auth'
import { useColorMode } from '@vueuse/core'
import { ref } from 'vue'

const isDialogOpen = ref(false)
const toggleDialog = () => (isDialogOpen.value = !isDialogOpen.value)
const store = useAuthStore()
const mode = useColorMode()
const components = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.'
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.'
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
  }
]
</script>

<style lang="scss" scoped></style>
