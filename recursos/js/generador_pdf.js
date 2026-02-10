window.descarregarPDF = async function () {

    try {
        const bytes = await fetch("recursos/full_pj.pdf").then(r => r.arrayBuffer());
        const pdfDoc = await PDFLib.PDFDocument.load(bytes);
        const form = pdfDoc.getForm();

        console.log(form.getFields().map(f => f.getName()));


        form.getTextField("Força").setText(

        );
        form.getTextField("Força2").setText(
            document.getElementById("for").textContent
        );
        form.getTextField("Destresa").setText(

        );
        form.getTextField("Destresa2").setText(
            document.getElementById("des").textContent
        );
        form.getTextField("Voluntat").setText(

        );
        form.getTextField("Voluntat2").setText(
            document.getElementById("vol").textContent
        );
        form.getTextField("Armadura").setText(
            document.getElementById("armaduraTotal").textContent
        );
        form.getTextField("PD").setText(

        );
        form.getTextField("PD2").setText(
            document.getElementById("pd").textContent
        );
        form.getTextField("Esgotament").setText(

        );
        form.getTextField("Rerefons").setText(
            document.getElementById("edat").textContent + " anys."
        );
        form.getTextField("Rerefons2").setText(
            document.getElementById("rerefons_addicional").textContent + " i " +
            document.getElementById("rerefons").textContent + "."
        );
        form.getTextField("Fisic").setText(
            document.getElementById("fisic").textContent
        );
        form.getTextField("Pell").setText(
            document.getElementById("pell").textContent
        );
        form.getTextField("Cabells").setText(
            document.getElementById("cabells").textContent
        );
        form.getTextField("Rostre").setText(
            document.getElementById("rostre").textContent
        );
        form.getTextField("Veu").setText(
            document.getElementById("veu").textContent
        );
        form.getTextField("Vestimenta").setText(
            document.getElementById("vestimenta").textContent
        );
        form.getTextField("Virtut").setText(
            document.getElementById("virtut").textContent
        );
        form.getTextField("Defecte").setText(
            document.getElementById("defecte").textContent
        );
        form.getTextField("Reputació").setText(
            document.getElementById("reputacio").textContent
        );
        form.getTextField("Desgràcia").setText(
            document.getElementById("desgracia").textContent
        );
        form.getTextField("Notes1").setText(

        );
        form.getTextField("Notes2").setText(
            "El teu nom de Cairn clàssic seria "+
            document.getElementById("nomclassic").textContent + " " + document.getElementById("cognomclassic").textContent + "."

        );
        form.getTextField("Nom").setText(
            document.getElementById("nom").textContent + "\r" + document.getElementById("cognom").textContent
            + "\r\r" + document.getElementById("nomclassic").textContent + "\r" + document.getElementById("cognomclassic").textContent
        );
        form.getTextField("Equip1").setText(
            document.getElementById("armes").textContent
        );
        form.getTextField("EquipX1").setText(

        );
        // form.getTextField("Equip2").setText(
        //
        // );
        form.getTextField("EquipX2").setText(

        );
        // form.getTextField("Equip3").setText(
        //
        // );
        form.getTextField("EquipX3").setText(

        );
        // form.getTextField("Equip4").setText(
        //
        // );
        form.getTextField("EquipX4").setText(

        );
        form.getTextField("Equip5").setText(
            "una torxa"
        );
        form.getTextField("EquipX5").setText(

        );
        form.getTextField("Equip6").setText(
            "racions per tres dies"
        );
        form.getTextField("EquipX6").setText(

        );
        form.getTextField("Equip7").setText(
            document.getElementById("material").textContent
        );
        form.getTextField("EquipX7").setText(

        );
        form.getTextField("Equip8").setText(
            document.getElementById("eina").textContent
        );
        form.getTextField("EquipX8").setText(

        );
        form.getTextField("Equip9").setText(
            document.getElementById("addicional").textContent
        );
        form.getTextField("EquipX9").setText(

        );
        form.getTextField("Equip10").setText(

        );
        form.getTextField("EquipX10").setText(

        );
        form.getTextField("MO").setText(
            document.getElementById("or").textContent
        );
        form.getTextField("MP").setText(

        );
        form.getTextField("MC").setText(

        );
        form.getTextField("Fotils").setText(
            document.getElementById("fotil").textContent
        );
        form.getTextField("Imatge").setText(

        );

        let casc = document.getElementById("casc").textContent;
        if (casc.includes("i un")){
            form.getTextField("Equip2").setText("escut (+1 Armadura)");
            form.getTextField("Equip4").setText("casc (+1 Armadura)");
        } else if (casc.includes("un casc")){
            form.getTextField("Equip4").setText("casc (+1 Armadura)");
        } else if (casc.includes("un escut")){
            form.getTextField("Equip2").setText("escut (+1 Armadura)");
        }

        let armadura = document.getElementById("armadura").textContent;
        if (!armadura.includes("sense armadura")){
            form.getTextField("Equip3").setText(armadura);
        }

        // form.getTextField("Força2").setText(
        //     document.getElementById("str").textContent
        // );

        const pdfBytes = await pdfDoc.save();

        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);

        const nomPersonatge = document.getElementById("nom").textContent + " " + document.getElementById("cognom").textContent;
        link.download = nomPersonatge + " Cairn.pdf";

        // link.download = "_.pdf"; // Nom del fitxer
        link.click();
    } catch (e) {
        console.error(e);
    }

}
