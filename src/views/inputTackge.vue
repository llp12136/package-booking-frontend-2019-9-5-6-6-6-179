<template>
<div>
  <h1>包裹入库</h1>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item label="运单号" :label-col="{ span: 9 }" :wrapper-col="{ span: 6 }">
      <a-input
        v-decorator="[
'id',
{rules: [{ required: true, message: '运单号' }]}
]"
      />
    </a-form-item>
    <a-form-item label="收件人" :label-col="{ span: 9 }" :wrapper-col="{ span: 6 }">
      <a-input
        v-decorator="[
'name',
{rules: [{ required: true, message: 'Please select name!' }]}
]"
        placeholder="收件人" 
     />
    
    </a-form-item>
    <a-form-item label="电话" :label-col="{ span: 9 }" :wrapper-col="{ span: 6 }">
      <a-input
        v-decorator="[
'phone',
{rules: [{ required: true, message: '电话' }]}
]"
      />
    </a-form-item>
    <a-form-item label="重量" :label-col="{ span: 9 }" :wrapper-col="{ span: 6 }">
      <a-input
        v-decorator="[
'weight',
{rules: [{ required: true, message: '重量' }]}
]"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
        this.$store.dispatch("createTodos",values);
      });
    }
   
  }
};
</script>