import { defineRule } from "vee-validate";

defineRule('minMax', (valeur, [min, max]) => {
    if (!valeur) {
        return "Ce champ est obligatoire"
    }
    if (valeur < min) {
        return `La valeur doit être supérieure à ${min}`
    }
    if (valeur > max) {
        return `La valeur doit être inférieure à ${max}`
    }
    return true
})