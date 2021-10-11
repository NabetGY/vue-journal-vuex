<template>
  <div class="entry-title d-flex justify-content-between p-2">
      <div class="">
          <span class="text-success fs-3 fw-bold">4</span>
          <span class="mx-1 fs-3">October</span>
          <span class="mx-2 fs-3 fw-light">2021, martes</span>
      </div>

      <div class="">
          <button class="btn btn-danger mx-2">
              borrar
              <i class="fa fa-trash-alt"></i>
          </button>
          <button class="btn btn-primary mx-2">
              Subir foto
              <i class="fa fa-upload"></i>
          </button>
      </div>

  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="¿Que sucedio hoy..."></textarea>
  </div>

  <Fab 
    icon='fa-save'
  />

  <img src="https://images.unsplash.com/photo-1633969310664-1b2a5d847497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
   alt="entry-picture"
   class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {

    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue'))
    }

}
</script>

<style lang="scss" scoped>
    textarea {
        font-size: 20px;
        border: none;
        height: 100%;
        &:focus {
            outline: none;
        }
    }

    img {
       width: 200px; 
       position: fixed;
       bottom: 150px;
       right: 20px;
       box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }
</style>