<template>
  <div class="box">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae iure est, esse excepturi impedit minus unde dolorum quam tempora magnam ipsam incidunt numquam odit qui, autem error ullam totam facilis.</p>

    <form
      class="form"
      @submit.prevent="save"
    >
      <div class="form__group">
        <label>Company Name</label>
        <input
          type="text"
          v-model.trim="$v.company.name.$model"
          placeholder="e.g. Your Company Name"
        >
      </div>
      <div class="form__group">
        <label>Company Spend</label>
        <input
          type="text"
          :value="companyDisplayValues.spend"
          @change="setSpend($event, 'spend')"
          @blur="setSpend($event, 'spend')"
          @focus="setSpend($event, 'spend')"
          placeholder="e.g. $150,000"
        >
      </div>
      <div class="form__group">
        <label>Company Spend Ability</label>
        <input
          type="text"
          @change="setMinMaxSpend"
          @blur="setMinMaxSpend"
          @focus="setMinMaxSpend"
          :value="companyDisplayValues.minMaxSpend"
          placeholder="e.g. $150,000 - $330,000"
        >
      </div>
      <div class="form__group">
        <label>Company Location</label>
        <input
          type="text"
          v-model.trim="$v.company.location.$model"
          placeholder="e.g. Your Company Location"
        >
      </div>
      <div class="form__group">
        <label>Company Category</label>
        <input
          type="text"
          v-model.trim="$v.company.category.$model"
          placeholder="e.g. Your Company Category"
        >
      </div>

      <div>
        <button
          type="button"
          class="btn btn__info"
          @click="showModal = !showModal"
        >Add Notes</button>

        <Modal v-model="showModal">
          <div class="form__group">
            <label>Note</label>
            <textarea
              v-model.trim="$v.company.note.$model"
              placeholder="e.g. Good Tech Company"
            ></textarea>
          </div>
          <button
            type="button"
            class="btn btn__info"
            @click="showModal = !showModal"
          >Save</button>
        </Modal>
      </div>

      <div class="form__group">
        <button
          type="submit"
          class="btn btn__info"
          :disabled="$v.$invalid"
        >Save</button>
      </div>
    </form>

  </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

import { positiveNumber } from '@/validators'
import Modal from '@/components/Modal'
import { currencyFormatter } from '@/utils'

export default {
  name: 'CompanyData',
  components: {
    Modal
  },
  data: () => ({
    company: {},
    companyDefaultValues: {
      name: undefined,
      spend: undefined,
      minSpend: undefined,
      maxSpend: undefined,
      note: undefined,
      location: undefined,
      category: undefined
    },
    companyDisplayValues: {
      spend: undefined,
      minMaxSpend: undefined
    },
    showModal: false
  }),
  validations: {
    company: {
      name: { required },
      spend: { required, positiveNumber },
      minSpend: { required, positiveNumber },
      maxSpend: { required, positiveNumber },
      note: {},
      location: { required },
      category: { required }
    }
  },
  created () {
    this.reset()
  },
  methods: {
    ...mapActions(['createCompany']),
    currencyFormatter (value) {
      return currencyFormatter().format(value)
    },
    setSpend (event, field) {
      const { type, target: { value } } = event
      switch (type) {
        case 'blur':
          this.companyDisplayValues[field] = this.company[field]
            ? this.currencyFormatter(this.company[field])
            : undefined
          break
        case 'focus':
          this.companyDisplayValues[field] = this.company[field]
          break
        case 'change':
          this.company[field] = +value || undefined
          break
      }
    },
    setMinMaxSpend (event) {
      const { type, target: { value } } = event
      switch (type) {
        case 'blur':
          this.companyDisplayValues.minMaxSpend = this.company.minSpend && this.company.maxSpend
            ? this.currencyFormatter(this.company.minSpend) + ' - ' + this.currencyFormatter(this.company.maxSpend)
            : undefined
          break
        case 'focus':
          this.companyDisplayValues.minMaxSpend = (this.company.minSpend || 0) + ' - ' + (this.company.maxSpend || 0)
          break
        case 'change':
          const [minSpend, maxSpend] = value.split(' - ')
          if (+maxSpend > +minSpend) {
            this.company.minSpend = +minSpend || undefined
            this.company.maxSpend = +maxSpend || undefined
          }
          break
      }
    },
    reset () {
      this.company = Object.assign({}, this.companyDefaultValues)
      this.companyDisplayValues.minMaxSpend = undefined
      this.companyDisplayValues.spend = undefined
    },
    async save () {
      try {
        const res = await this.createCompany({ company: this.company })
        console.log('Created: ', res)
        this.$router.push('/dashboard/company/table')
        this.reset()
      } catch (e) {
        console.log('Error: ', e)
      }
    }
  }
}
</script>
