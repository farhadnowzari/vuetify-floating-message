<template>
    <v-snackbar 
        :bottom="positionBottom"
        :color="color"
        :dark="themeDark"
        :light="themeLight"
        :timeout="dismissable ? null : timeout"
        :top="positionTop"
        v-model="toggler">
        <div class="d-flex align-start">
            <v-icon 
                :color="themeDark ? 'white' : type" 
                class="mr-2"
                v-if="showIcon">{{ messageIcon }}</v-icon>
            <span class="text-subtitle-1">{{message}}</span>
        </div>
        <template v-if="dismissable" v-slot:action="{attrs}">
            <v-btn
                icon
                text
                v-bind="attrs"
                @click="destroyComponent()">
                <v-icon>mdi-window-close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import { VSnackbar, VIcon } from 'vuetify/lib';
export default {
    components: {
        VSnackbar,
        VIcon
    },
    computed: {
        color() {
            if(this.themeDark) {
                return this.type;
            }
            return 'black--text';
        },
        messageIcon() {
            if(this.icon) return this.icon;
            if(this.type === 'info') {
                return 'mdi-alert-circle-outline';
            }
            if(this.type === 'warning') {
                return 'mdi-alert-outline';
            }
            if(this.type === 'success') {
                return 'mdi-check-circle-outline';
            }
            if(this.type === 'error') {
                return 'mdi-close-octagon-outline';
            }
            return null;
        },
        positionBottom() {
            return this.position === 'bottom';
        },
        positionTop() {
            return this.position === 'top';
        },
        themeDark() {
            return this.theme === 'dark';
        },
        themeLight() {
            return this.theme === 'light';
        },
    },
    data() {
        return {
            toggler: true
        }
    },
    methods: {
        destroyComponent() {
            this.toggler = false;
        }
    },
    name: 'vuetify-message',
    props: {
        dismissable: Boolean,
        icon: String,
        message: {
            type: String,
            required: true
        },
        position: {
            type: String,
            default: 'top',
        },
        showIcon: {
            type: Boolean,
            default: false 
        },
        theme: {
            type: String,
            default: 'dark'
        },
        timeout: {
            type: Number,
            default: 2000,
        },
        type: {
            type: String,
            required: true
        }
    },
    watch: {
        toggler() {
            if(!this.toggler) {
                this.$nextTick(() => {
                    this.$destroy();
                });
            }
        }
    }
}
</script>

<style>

</style>