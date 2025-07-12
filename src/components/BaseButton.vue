<template>
    <component :is="componentType" :to="to" :href="href" :class="['btn', buttonClasses]" :type="type"
        :disabled="isButton && disabled" @click="$emit('click')">
        <slot />
    </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    variant: {
        type: String,
        default: 'primary'
    },
    size: {
        type: String,
        default: null
    },
    to: {
        type: [String, Object],
        default: null
    },
    href: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: 'button'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const buttonClasses = computed(() => {
    return [
        props.variant && `btn--${props.variant}`,
        props.size && `btn--${props.size}`
    ]
})

const componentType = computed(() => {
    if (props.to) return RouterLink
    if (props.href) return 'a'
    return 'button'
})

const isButton = computed(() => componentType.value === 'button')
</script>

<style lang="scss">
.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 0;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;

    &--primary {
        background: $primary-color;
        color: $white;

        &:hover {
            background: lighten($primary-color, 10%);
        }
    }

    &--outline {
        background: transparent;
        color: $primary-color;
        border: 1px solid $primary-color;

        &:hover {
            background: $primary-color;
            color: $white;
        }
    }

    &--small {
        padding: 8px 16px;
        font-size: 0.8rem;
    }
}
</style>
