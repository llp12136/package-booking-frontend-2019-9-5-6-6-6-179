
<template>
    <div class="about">
       <h1>预约取件</h1>
    
  <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      label="运单号："
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          '运单号',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
      />
    </a-form-item>
    <a-form-item
      label="取件时间："
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          '取件时间',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
      />
       
    </a-form-item>
    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <a-button
        type="primary"
        html-type="submit"
      >
        预约

      </a-button>
       <a-button
        type="primary"
        html-type="submit"
      >
        取消

      </a-button>
    </a-form-item>
  </a-form>
   </div>
</template>

<script>
export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
    };
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
  },
};
</script>