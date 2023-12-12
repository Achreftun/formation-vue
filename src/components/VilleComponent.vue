<template >
    <li>
        <input 
        type="text" 
        :value="ville"
        placeholder="Ville"
        @input="$emit('update:ville', $event.target.value)">
        <input 
        type="text" 
        placeholder="codePostal"
        :value="codePostal"
        @input="$emit('update:codePostal', $event.target.value)">
    </li>
</template>
<script>
export default {
    props: ['ville', 'codePostal'],
    emits: ['update:ville', 'update:codePostal']
}
</script>
<style ></style>