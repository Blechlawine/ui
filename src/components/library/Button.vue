<template>
    <component :is="tag" :type="type" :class="classes" @click="emit('click', $event)" :to="to">
        <slot name="leading" :disabled="disabled" :loading="loading">
            <Icon
                v-if="isLeading && leadingIconName"
                :name="leadingIconName"
                :class="leadingIconClasses"
                aria-hidden="true"
            />
        </slot>
        <slot>
            <span v-if="label">
                {{ label }}
            </span>
        </slot>
        <slot name="trailing" :disabled="disabled" :loading="loading">
            <Icon
                v-if="isTrailing && trailingIconName"
                :class="trailingIconClasses"
                :name="trailingIconName"
                aria-hidden="true"
            />
        </slot>
    </component>
</template>
<script setup lang="ts">
const {
    variant = "base",
    loadingIcon = "i-tabler-loader-2",
    type = "button",
    ...props
} = defineProps<{
    to?: string;
    is?: string;
    label?: string;
    icon?: string;
    leadingIcon?: string;
    trailingIcon?: string;
    loading?: boolean;
    loadingIcon?: string;
    leading?: boolean;
    square?: boolean;
    trailing?: boolean;
    disabled?: boolean;
    type?: string;
    variant?: "base" | "ghost" | "neutral" | "primary";
}>();
const slots = useSlots();
const emit = defineEmits<{
    (e: "click", event: MouseEvent): void;
}>();

const tag = computed(() => (props.is ?? props.to ? "router-link" : "button"));

const classes = computed(() => ({
    "btn-primary": variant === "primary",
    "btn-ghost": variant === "ghost",
    "btn-neutral": variant === "neutral",
    "btn-link": props.to !== undefined,
    "btn-square": isSquare.value,
    btn: true,
}));

const isLeading = computed(
    () =>
        (props.leading && props.icon) ||
        (props.icon && !props.trailing) ||
        (props.loading && !props.trailing) ||
        props.leadingIcon
);
const isTrailing = computed(
    () => (props.icon && props.trailing) || (props.loading && props.trailing) || props.trailingIcon
);
const isSquare = computed(() => props.square || (!slots.default && !props.label));

const leadingIconName = computed(() => {
    if (props.loading) {
        return loadingIcon;
    }
    return props.leadingIcon || props.icon;
});

const trailingIconName = computed(() => {
    if (props.loading) {
        return loadingIcon;
    }
    return props.trailingIcon || props.icon;
});

const leadingIconClasses = computed(() => ({
    "animate-spin": props.loading,
}));

const trailingIconClasses = computed(() => ({
    "animate-spin": props.loading && !isTrailing.value,
}));
</script>
