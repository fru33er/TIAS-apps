<template>
    <Head>
        <title>Login Mahasiswa</title>
    </Head>
    <div class="row justify-content-center mt-5">
        <div class="col-md-5">
            <div class="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div v-if="errors.message" class="alert alert-danger mt-2">
                    {{ errors.message }}
                </div>
                <div v-if="$page.props.session.error" class="alert alert-danger mt-2">
                    {{ $page.props.session.error }}
                </div>
                <form @submit.prevent="submit" class="mt-4">

                    <div class="form-group mb-4">
                        <label for="course_code">Kode Mata Kuliah</label>
                        <div class="input-group">
                            <input type="text" class="form-control" v-model="form.course_code" placeholder="Kode Mata Kuliah">
                        </div>
                        <div v-if="errors.course_code" class="alert alert-danger mt-2">
                            {{ errors.course_code }}
                        </div>
                    </div>

                    <div class="form-group mb-4">
                        <label for="class_id">Kelas</label>
                        <div class="input-group">
                            <select name="language" class="form-control" id="language">
                                <option value="default" selected disabled>Pilih Kelas</option>
                                <option value="Reguler A">Reguler A</option>
                                <option value="Reguler B">Reguler B</option>
                                <option value="Reguler C">Reguler C</option>
                                <option value="Reguler D">Reguler D</option>
                                <option value="Reguler E">Reguler E</option>
                                <option value="Karyawan A">Karyawan A</option>
                                <option value="Karyawan B">Karyawan B</option>
                            </select>
                            <span class="input-group-text" id="basic-addon1">
                                <i class="fa fa-key"></i>
                            </span>
                        </div>
                        <div v-if="errors.course_code" class="alert alert-danger mt-2">
                            {{ errors.course_code }}
                        </div>
                    </div>

                    <div class="form-group mb-4">
                        <label for="email_TIAS">Email</label>
                        <div class="input-group">
                            <input type="email" class="form-control" v-model="form.email_TIAS" placeholder="Email">
                        </div>
                        <div v-if="errors.email_TIAS" class="alert alert-danger mt-2">
                            {{ errors.email_TIAS }}
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-group mb-4">
                            <label for="password_TIAS">Password</label>
                            <div class="input-group">
                                <input type="password" placeholder="Password" class="form-control"
                                    v-model="form.password_Tias">
                            </div>
                            <div v-if="errors.password_TIAS" class="alert alert-danger mt-2">
                                {{ errors.password_TIAS }}
                            </div>
                        </div>

                    </div>
                    
                    <div class="d-grid">
                        <button type="submit" class="btn btn-gray-800">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    //import layout
    import LayoutStudent from '../../../Layouts/Student.vue';

    //import Head from Inertia
    import {
        Head
    } from '@inertiajs/inertia-vue3';

    //import reactive
    import {
        reactive
    } from 'vue';

    //import inertia adapter
    import {
        Inertia
    } from '@inertiajs/inertia';

    export default {

        //layout
        layout: LayoutStudent,

        //register component
        components: {
            Head
        },

        //props
        props: {
            errors: Object,
        },

        //inisialisasi composition API
        setup() {

            //define form state
            const form = reactive({
                nisn: '',
                password: '',
            });

            //submit method
            const submit = () => {

                //send data to server
                Inertia.post('/students/login', {

                    //data
                    nisn: form.nisn,
                    password: form.password,
                });
            }

            //return
            return {
                form,
                submit
            }
        }

    }

</script>

<style>

</style>
