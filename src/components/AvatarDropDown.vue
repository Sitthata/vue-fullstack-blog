<template>
  <AlertDialog>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar class="cursor-pointer">
          <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div class="flex gap-2 items-center cursor-pointer">
            <Icon icon="iconamoon:profile" />
            Profile
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <AlertDialogTrigger>
            <div class="flex gap-2 items-center">
              <Icon icon="material-symbols:logout" />Sign Out
            </div>
          </AlertDialogTrigger>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Logout</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="store.logout">Logout</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<script setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Icon } from '@iconify/vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()
</script>

<style lang="scss" scoped></style>
