const schema = {

  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: () => {
      return new Date();
    },
  },
  firstName: {
    label: 'Prénom',
    type: String,
    optional: true,
    canRead: ['members'],
    canCreate: ['guests'],
    canUpdate: ['members'],
  },
  lastName: {
    label: 'Nom',
    type: String,
    optional: true,
    canRead: ['members'],
    canCreate: ['guests'],
    canUpdate: ['members'],
  },
  age: {
    label: 'Age',
    type: Number,
    min: 0,
    max: 120,
    optional: true,
    canRead: ['members'],
    canCreate: ['guests'],
    canUpdate: ['members'],
  },
  isSelected: {
    label: 'Selectionné',
    type: Boolean,
    optional: true,
    hidden: true,
    canRead: ['members'],
    canCreate: ['members'],
    canUpdate: ['members'],
  }

};

export default schema;