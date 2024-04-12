import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/modified-shadcn-ui-components/modified-alert-dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
// todo: this looks disgusting, restyle later
export default function TermsAndConditions() {
  return (
    <AlertDialog>
      <span>
        <AlertDialogTrigger asChild>
          <span className="underline text-blue-400">
            Terms of Service and Privacy Policy
          </span>
        </AlertDialogTrigger>
      </span>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="content-center">
            Terms and Conditions
          </AlertDialogTitle>
          <AlertDialogDescription>
            <ScrollArea className="h-72 rounded-md border">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse efficitur, sem in tincidunt pretium, elit mi
                tristique est, a gravida ligula justo vel eros. Morbi vitae
                lacus quis leo vulputate consequat. Vestibulum vel egestas mi.
                Sed venenatis in nulla et vulputate. Morbi vestibulum orci in mi
                luctus, quis maximus libero tempor. Suspendisse auctor diam quis
                arcu maximus, et mattis diam pretium. Pellentesque rhoncus,
                dolor volutpat tristique convallis, ante odio molestie est, eu
                elementum enim odio tristique risus. Sed congue ullamcorper
                condimentum. Sed vestibulum eros est, eu vehicula mauris
                pulvinar non. Sed commodo suscipit porta. Integer augue risus,
                luctus in hendrerit non, dignissim ac turpis. In fringilla leo
                vitae leo scelerisque, a rhoncus tellus eleifend. Ut dignissim
                mattis felis, sed aliquam leo blandit quis. In nibh diam,
                pretium volutpat consequat vitae, vehicula non odio. Curabitur
                et nisl vitae ex volutpat rhoncus eget vitae ligula. Proin eget
                turpis sit amet diam suscipit congue. Suspendisse viverra congue
                libero tempor fringilla. Vestibulum feugiat placerat erat, eget
                aliquet augue fringilla tempus. Nullam id libero tempus, rutrum
                sapien at, venenatis diam. Sed gravida tempor bibendum.
                Pellentesque a aliquet odio. Suspendisse ut viverra nunc. Aenean
                nec mollis ex. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut rhoncus vestibulum turpis, ut placerat ex
                euismod ut. Donec convallis pulvinar efficitur. Duis nisi augue,
                blandit ullamcorper sem sed, finibus egestas metus. Pellentesque
                a lacus bibendum, semper lectus vel, porta diam. Ut convallis
                nisl felis, eget tincidunt risus venenatis a. Maecenas blandit,
                neque gravida semper luctus, mauris sapien mattis quam, vel
                congue enim tortor vel ex. Aenean eget orci id ex tempus
                feugiat. Mauris posuere elementum gravida. Sed at auctor sem.
                Fusce in nisi libero. Pellentesque auctor, lectus in dapibus
                euismod, enim sem vehicula metus, rutrum posuere ante nulla a
                eros. Duis ut tempor neque. Mauris nibh tellus, volutpat et
                lorem eu, facilisis cursus mi. Etiam porttitor varius venenatis.
                Etiam suscipit mauris et quam iaculis, vel scelerisque augue
                ornare. Mauris id posuere magna, sit amet ornare lorem. Proin
                eget dolor nec erat vehicula cursus vitae in tellus. Maecenas a
                venenatis leo. Donec mattis arcu nec purus mattis hendrerit.
                Quisque luctus semper felis, at ultricies nunc elementum nec.
                Duis tincidunt, turpis sed finibus convallis, ex nulla dapibus
                nisi, et scelerisque augue turpis et enim. Pellentesque
                pellentesque pulvinar dui, accumsan vulputate tortor. Donec ut
                ultrices nibh. Mauris porttitor, massa ac dapibus consequat,
                tellus lacus fringilla ipsum, in eleifend quam libero eu risus.
                Donec vestibulum metus tortor. Integer id cursus nibh. Phasellus
                elit urna, varius id odio et, imperdiet placerat sem. Aliquam
                tristique turpis ac magna bibendum tristique. Pellentesque
                tristique enim vel imperdiet scelerisque. Suspendisse placerat,
                magna et fringilla cursus, felis orci pharetra ipsum, ut
                suscipit arcu urna eu mi. Vivamus et aliquet sapien. Proin
                pretium eu massa sed convallis. Phasellus porttitor luctus
                vestibulum. Donec eget ligula risus. Praesent leo tellus,
                lacinia vel tincidunt nec, venenatis eu sem. Sed vestibulum
                vestibulum ante, ut luctus purus mattis sit amet. Integer a dui
                bibendum, rutrum tellus ac, commodo quam. Nam quis tortor lacus.
                Ut molestie vehicula justo, quis congue sapien varius quis.
                Suspendisse potenti. Integer a justo in libero consectetur
                consequat. Integer id ligula vitae massa dignissim luctus eget
                eu tortor. Ut fringilla euismod elit, malesuada consequat lacus
                tincidunt at. Donec eu magna in neque facilisis pretium
                scelerisque at augue. Cras pulvinar lacus ut lorem dapibus
                vestibulum. Sed felis ex, tincidunt a felis id, vehicula aliquet
                massa. Nullam sed dignissim quam, in gravida erat. Ut a augue
                vestibulum, porttitor libero quis, sollicitudin arcu. Vestibulum
                finibus imperdiet odio, non sollicitudin ex. Cras eget mauris
                ultrices, tincidunt risus id, lobortis libero. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Vestibulum
                consequat nibh at mi vulputate venenatis. Quisque at orci arcu.
                Fusce in est luctus, fermentum sapien sed, rutrum quam. Fusce in
                neque eget enim tincidunt convallis ac at diam. Suspendisse
                interdum, lectus eu pharetra vehicula, ipsum turpis malesuada
                felis, nec gravida est dui vitae eros. Sed aliquam suscipit
                tempor. Etiam et dui a sem faucibus volutpat nec vel diam. Nulla
                dictum quam vel massa pharetra, hendrerit pulvinar arcu
                eleifend. Quisque iaculis, turpis ut sollicitudin suscipit, ex
                dui commodo magna, eget tempus arcu metus in tellus. Nulla
                ullamcorper orci vitae nisl sollicitudin consequat. Vestibulum
                nunc nulla, venenatis et est vel, iaculis venenatis enim.
                Phasellus hendrerit lorem ac sem condimentum, quis tincidunt
                enim fringilla. Suspendisse commodo auctor tortor sit amet
                eleifend. Proin ultrices eros sed neque facilisis laoreet. Donec
                lacinia non ligula sit amet tincidunt. Aliquam ut ex bibendum,
                vulputate quam vitae, pretium ante. Fusce tincidunt vel sem in
                fringilla. Nullam diam enim, dictum vel risus vel, aliquam
                pellentesque justo. Donec quis enim congue, accumsan purus sed,
                venenatis arcu. Etiam sollicitudin risus eu magna placerat
                bibendum. Nullam ornare sit amet magna ut gravida. Sed eleifend
                dui non fringilla aliquam. Proin luctus turpis orci, eu gravida
                magna consectetur id. Aliquam egestas scelerisque porta. Sed
                vehicula et sem id ultrices. Nulla gravida augue vel finibus
                fringilla. Aliquam vulputate vulputate est. Cras est lectus,
                pellentesque non tellus sit amet, aliquet tempus urna. Integer
                euismod maximus diam, eu rhoncus erat fringilla vel. Suspendisse
                tristique convallis lectus at consequat. Morbi mollis turpis sed
                tempus varius. Phasellus erat nisl, vestibulum eget eros sit
                amet, euismod pulvinar nisi. Fusce vehicula venenatis nunc. Nam
                in suscipit ipsum. Sed tempor condimentum massa sit amet
                egestas. Sed feugiat, metus et commodo tincidunt, lectus diam
                eleifend purus, eu fermentum lorem dolor eget lacus. Fusce
                scelerisque felis at arcu eleifend, vel fringilla nulla
                eleifend. Cras eget diam vel libero egestas cursus in ut lorem.
                Mauris porta porttitor tincidunt. Etiam finibus enim auctor,
                porttitor nisl quis, dictum augue. Duis iaculis ex quam, in
                rutrum nulla finibus vel. Cras id varius nisi, vitae tincidunt
                dui. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Sed varius mi ac faucibus
                porttitor. Cras in tincidunt orci, eu viverra justo. Suspendisse
                potenti. Phasellus vitae nisl magna. Phasellus in sapien lacus.
                Donec mattis tellus et purus convallis facilisis. Ut sagittis
                ipsum nisl, id dapibus justo lacinia vel. Nam in nunc leo.
                Pellentesque vestibulum, tellus a venenatis elementum, arcu
                lacus fermentum nulla, ut sodales magna elit sit amet orci.
                Aliquam nec laoreet erat. Nam eu semper odio, non convallis
                nunc. Aliquam at scelerisque purus. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Quisque in placerat dui, at posuere odio. Donec eget viverra
                nisi. Quisque malesuada aliquet congue. Sed euismod orci nec
                ligula ullamcorper, nec sodales urna molestie. Suspendisse quis
                diam quis ligula finibus mattis. Etiam est nunc, faucibus varius
                lacus ac, consequat iaculis lectus. Etiam et turpis commodo,
                rutrum lectus sit amet, venenatis odio. Praesent aliquet
                scelerisque finibus. Sed nec felis pulvinar, consequat metus sit
                amet, condimentum leo. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Donec ut enim bibendum, sagittis eros ac,
                placerat felis. Donec tincidunt porttitor porta. Proin et ante
                at urna pulvinar eleifend. Pellentesque id pretium nibh,
                fermentum rutrum mauris. Fusce vel sem et felis luctus
                consectetur vel vel ex. Morbi eleifend, lorem eget blandit
                lacinia, nisl dolor posuere elit, quis lacinia mi quam a orci.
                Etiam interdum sodales sollicitudin. Pellentesque cursus, orci
                nec iaculis venenatis, augue enim congue velit, non sollicitudin
                elit nibh tincidunt enim. Mauris id faucibus ligula, et
                condimentum magna. Morbi ac dui a velit faucibus consectetur vel
                eget purus. Quisque lectus sem, accumsan ut bibendum nec, tempus
                consequat purus. Vivamus diam ligula, viverra vitae faucibus ut,
                fringilla facilisis arcu. Donec ornare, dolor varius fermentum
                tincidunt, ex massa dignissim magna, in dictum turpis eros
                posuere orci. Sed consequat interdum nisi. Etiam a orci
                tincidunt, aliquam orci a, lacinia magna. Aliquam erat volutpat.
                Vestibulum dictum, est in porta venenatis, arcu neque ornare
                nibh, in ullamcorper mauris nisl non sapien. Nulla nec elementum
                lacus. Phasellus aliquet porttitor viverra. Pellentesque
                eleifend arcu vel placerat vestibulum. Donec fermentum dui sit
                amet justo mollis lacinia. Fusce luctus convallis felis, eu
                tincidunt ipsum. Integer id odio vel neque tincidunt
                pellentesque vestibulum vel nisl. Curabitur aliquam varius
                imperdiet. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Quisque in sapien in
                elit congue dictum. Nullam dictum porttitor erat, at malesuada
                metus lacinia non. Quisque mi neque, tincidunt ut ex sodales,
                varius iaculis nisi. Cras et commodo neque, vitae ornare sapien.
                Nulla porta tellus a pharetra suscipit. Phasellus justo metus,
                dignissim et hendrerit eget, feugiat at est. Aliquam consequat
                finibus urna et sodales. Nullam vitae blandit ligula, vitae
                posuere tellus. Cras at justo a nisi suscipit viverra. Sed ac
                massa vestibulum, mollis dolor ut, faucibus felis. Duis gravida,
                quam id tristique molestie, lorem mauris euismod urna, in luctus
                arcu sapien et elit. Aliquam facilisis mi eu mi bibendum rutrum.
                Cras quis massa id nisi facilisis viverra. Pellentesque
                consequat volutpat feugiat. Nam nibh nibh, ullamcorper vitae
                consectetur in, vulputate eget dolor. Maecenas mollis turpis non
                orci malesuada ultrices. Nulla facilisi. Nunc bibendum, orci eu
                finibus hendrerit, quam lectus semper leo, in imperdiet dolor
                orci et dui. Curabitur eu convallis tortor. In tempus vel nisl
                nec sagittis. Cras fringilla libero sed semper gravida.
                Pellentesque maximus nulla in nibh elementum porta. Vivamus non
                fringilla velit. Pellentesque odio massa, ullamcorper vel est
                sit amet, porttitor aliquet enim. Mauris et tempor sapien, quis
                mollis odio. Duis vitae consequat lorem, vel maximus ipsum. Cras
                dapibus, velit eget elementum euismod, metus mi efficitur magna,
                a ornare urna arcu non odio. Nam nec mauris facilisis, feugiat
                justo quis, cursus mauris. Sed quam lectus, rhoncus a commodo
                ut, aliquam eget justo. Quisque hendrerit, diam eu consectetur
                consequat, enim odio mattis ipsum, tincidunt mattis ante elit
                nec mauris. Vivamus eleifend felis risus, et imperdiet diam
                sodales quis. Quisque bibendum porta volutpat. Duis eget
                hendrerit mauris. Nam vitae blandit libero. Curabitur et eros
                finibus, bibendum urna porttitor, gravida sapien. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Donec feugiat volutpat nibh, vitae faucibus
                dolor molestie iaculis. Fusce ex purus, condimentum eget
                imperdiet nec, blandit ut lacus. In ac nisi dapibus, scelerisque
                lectus eu, hendrerit elit. Nunc in luctus leo, hendrerit euismod
                ante. Nulla facilisi. Integer at pharetra dolor, in laoreet
                tellus. Morbi efficitur luctus sapien, quis tempus neque.
                Pellentesque semper lectus accumsan magna feugiat, in aliquet
                dui aliquet. Aliquam commodo, tortor non elementum molestie,
                tortor tortor tristique felis, quis sollicitudin nulla augue sit
                amet metus. Nunc odio purus, aliquam sed augue a, hendrerit
                euismod lacus. Phasellus nec elit a lacus dictum maximus. Nunc
                pretium interdum lobortis. Integer ut massa sem. Duis eleifend
                scelerisque gravida. Donec eu velit mollis, hendrerit nisi in,
                mollis elit. Fusce id vestibulum lorem, vitae congue dolor.
                Aliquam nulla diam, fringilla ut pretium ut, bibendum eu risus.
                Nam velit sapien, condimentum eget mauris ut, gravida venenatis
                tortor. Morbi porttitor venenatis ante, et luctus odio lobortis
                vitae. Phasellus dignissim feugiat neque ut sodales. Nulla
                accumsan mauris quis quam viverra imperdiet vel sit amet enim.
                Maecenas cursus lorem imperdiet, interdum magna eget, molestie
                mauris. Morbi quis hendrerit erat, id gravida lorem. Morbi
                tristique vehicula massa, nec consequat libero scelerisque et.
                Suspendisse at placerat nulla. Nam vehicula placerat dolor, vel
                mattis mi elementum in. Sed dictum massa mauris, quis efficitur
                tellus hendrerit in. In lobortis dui non magna tincidunt, nec
                tincidunt enim dapibus. Phasellus dapibus luctus urna egestas
                aliquet. Nam ultricies dolor eget lacinia egestas. Pellentesque
                fringilla sagittis finibus. Sed porta auctor est ut elementum.
                Sed at congue ex, non sodales quam. Curabitur non nisl ex.
                Aliquam a laoreet odio. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Cras commodo sapien non mi dignissim,
                ut tincidunt lectus cursus. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Vestibulum condimentum sed diam a
                lobortis. Integer sed nisi dolor. Donec dignissim risus eu nibh
                facilisis fermentum. Suspendisse in aliquam dui, eu ornare odio.
                Nulla scelerisque fringilla tellus, et porttitor enim pretium
                id. Sed nulla urna, porttitor ut erat sit amet, cursus gravida
                sapien. Aenean ex quam, placerat id facilisis nec, tristique
                vitae ex. Aenean felis lectus, vehicula vel felis vitae, feugiat
                pellentesque risus. Sed nulla lorem, bibendum et viverra vel,
                lacinia at mi. Nullam id lorem justo. Vivamus.
              </p>
            </ScrollArea>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
