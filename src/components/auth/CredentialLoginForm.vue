<template>
  <div>
    <form class="space-y-6 flex flex-col" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem v-auto-animate>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="text" placeholder="user@example.com" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem v-auto-animate>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="password" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit">Sign In</Button>
    </form>
  </div>
</template>

<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import Input from '@/components/ui/input/Input.vue'
import Button from '@/components/ui/button/Button.vue'
import * as z from 'zod'
import { useAuthStore } from '@/stores/auth'

const emits = defineEmits(['toggle'])
const store = useAuthStore()

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(4)
  })
)

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {
  store.login(values)
  emits('toggle')
  console.log('Form submitted!', values)
})
</script>
