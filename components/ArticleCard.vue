<template>
  <div class="flex flex-wrap justify-between items-center relative">
    <div v-if="metaimage" class="rounded-tl bg-gray-300 shadow-xl ml-12 w-full min-h-72 z-3 relative overflow-hidden md:flex-1 md:ml-0">
      <nuxt-picture
        :img-attrs="{class:'h-full object-cover w-full'}"
        sizes="xs:400px sm:500px md:500px lg:700px xl:800px"
        :src="metaimage"
        :alt="title"
        loading="lazy"
        quality="80"
        height="700"
        width="800"
        fit="cover"
      />
    </div>
    <div class="flex flex-col flex-1 py-12 px-12 z-10 relative md:pr-0 ">
      <Markdown :body="title" type="heading" />
      <p class="font-bold mt-3 text-red text-right mb-6 w-full">
        {{ humanizeDate(createdAt) }}
      </p>
      <Markdown :body="brief" />

      <ButtonInternal :to="'/news/' + slug" class="mt-6 self-start">
        Read Article
      </ButtonInternal>
    </div>
    <div class="inset-0 z-0 absolute pointer-events-none">
      <CircleDec stripes flip />
    </div>
  </div>
</template>

<script>
import { humanizeDate } from '~/utils/helpers'
export default {

  props: {
    title: {
      type: String,
      default: ''
    },
    brief: {
      type: String,
      default: ''
    },
    metaimage: {
      type: String,
      default: ''
    },
    body: {
      type: Object,
      default: () => { }
    },
    slug: {
      type: String,
      default: '/'
    },
    createdAt: {
      type: String,
      default: ''
    }
  },
  computed: {
    all () {
      return this.rest
    }
  },
  methods: {
    humanizeDate
  }
}
</script>

<style scoped>

</style>
