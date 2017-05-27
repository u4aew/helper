<?php
/**
 * Created by PhpStorm.
 * User: Сергей
 * Date: 27.05.2017
 * Time: 14:53
 */

namespace AppBundle\Admin\Consultant;


use Creonit\AdminBundle\Module;

class ConsultantModule extends Module
{
    protected function configure()
    {
        $this
            ->setTitle('Консультант')
            ->setIcon('question-circle')
            ->setTemplate('IssueTable')
        ;
    }



    public function initialize()
    {
        $this->addComponent(new IssueTable());
        $this->addComponent(new IssueEditor());
    }
}