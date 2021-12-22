var fecha=new Date();
        var dia=fecha.getDay();
        var mes=fecha.getMonth();
        var año=fecha.getUTCFullYear();
        document.writeln('Fecha: '+dia+'/'+mes+'/'+año);

        var hora=fecha.getHours();
        var min=fecha.getMinutes();
        var seg=fecha.getSeconds();
        document.writeln('Hora de visita: '+ hora+':'+min+':'+seg);
