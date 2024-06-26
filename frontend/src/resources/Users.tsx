//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const UsersTitle = () => {
  const record = useRecordContext();
  return <span>Users {record ? `"${record.name}"` : ''}</span>;
};

export const UsersList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="name" />
      <TextField source="contactDetails" />
      <ImageField source="avatar" />
      <BooleanField source="emailNotifications" />
      <ReadOnlyPasswordField source="password" />
      <TextField source="privacyPreferences" />
      <TextField source="bookings" />
      <TextField source="paymentMethods" />
      <TextField source="tripHistory" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const UsersEdit = () => (
  <Edit title={<UsersTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="contactDetails" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="avatar" />
        </Grid>
        <Grid item xs={4}>
          <BooleanInput source="emailNotifications" />
        </Grid>
        <Grid item xs={4}>
          <PasswordInput source="password" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="privacyPreferences" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="bookings" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="paymentMethods" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="tripHistory" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const UsersCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="contactDetails" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="avatar" />
        </Grid>
        <Grid item xs={4}>
          <BooleanInput source="emailNotifications" />
        </Grid>
        <Grid item xs={4}>
          <PasswordInput source="password" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="privacyPreferences" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="bookings" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="paymentMethods" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="tripHistory" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
];
