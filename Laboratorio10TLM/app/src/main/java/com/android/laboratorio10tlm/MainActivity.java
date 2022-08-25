package com.android.laboratorio10tlm;

import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private EditText et1,et2,et3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        et1=(EditText)findViewById(R.id.et1);
        et2=(EditText)findViewById(R.id.et2);
        et3=(EditText)findViewById(R.id.et3);

    }
    public void ingresar(View v) {
        AdminSQLiteOpenHelper admin = new AdminSQLiteOpenHelper(this,
                "administracion", null, 1);
        SQLiteDatabase bd = admin.getWritableDatabase();
        String cod = et1.getText().toString();
        String descri = et2.getText().toString();
        String pre = et3.getText().toString();
        bd.execSQL("insert into articulos (codigo,descripcion,precio) values ("+cod+",'"+descri+"',"+pre+")");
        bd.close();
        et1.setText("");
        et2.setText("");
        et3.setText("");
        Toast.makeText(this, "Se cargaron los datos del artículo",
                Toast.LENGTH_SHORT).show();
    }

    public void consultaporcodigo(View v) {
        AdminSQLiteOpenHelper admin = new AdminSQLiteOpenHelper(this,
                "administracion", null, 1);
        SQLiteDatabase bd = admin.getReadableDatabase();
        String cod = et1.getText().toString();
        Cursor fila = bd.rawQuery(
                "select descripcion,precio from articulos where codigo=" + cod, null);
        if (fila.moveToFirst()) {
            et2.setText(fila.getString(0));
            et3.setText(fila.getString(1));
        } else
            Toast.makeText(this, "No existe un artículo con dicho código",
                    Toast.LENGTH_SHORT).show();
        bd.close();
    }

    public void consultapordescripcion(View v) {
        AdminSQLiteOpenHelper admin = new AdminSQLiteOpenHelper(this,
                "administracion", null, 1);
        SQLiteDatabase bd = admin.getReadableDatabase();
        String descri = et2.getText().toString();
        Cursor fila = bd.rawQuery(
                "select codigo,precio from articulos where descripcion like '%" + descri +"%'", null);
        if (fila.moveToFirst()) {
            et1.setText(fila.getString(0));
            et3.setText(fila.getString(1));
        } else
            Toast.makeText(this, "No existe un artículo con dicha descripción",
                    Toast.LENGTH_SHORT).show();
        bd.close();
    }

    public void eliminar(View v) {
        AdminSQLiteOpenHelper admin = new AdminSQLiteOpenHelper(this,
                "administracion", null, 1);
        SQLiteDatabase bd = admin.getWritableDatabase();
        String cod= et1.getText().toString();
        bd.execSQL("delete from articulos where codigo = "+cod);
        bd.close();
        et1.setText("");
        et2.setText("");
        et3.setText("");
        Toast.makeText(this, "Se borró el artículo con dicho código",
                Toast.LENGTH_SHORT).show();
    }

    public void modificar(View v) {
        AdminSQLiteOpenHelper admin = new AdminSQLiteOpenHelper(this,
                "administracion", null, 1);
        SQLiteDatabase bd = admin.getWritableDatabase();
        String cod = et1.getText().toString();
        String descri = et2.getText().toString();
        String pre = et3.getText().toString();
        bd.execSQL("update articulos set codigo="+cod+",descripcion='"+descri+"',precio="+pre+" where codigo="+cod);
        bd.close();
        Toast.makeText(this, "se modificaron los datos", Toast.LENGTH_SHORT)
                .show();
    }

}