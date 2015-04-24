<?php
namespace App\Model\Table;

use App\Model\Entity\EventVersion;
use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * EventVersions Model
 */
class EventVersionsTable extends Table
{

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        $this->table('event_versions');
        $this->displayField('name');
        $this->primaryKey('id');
        $this->addBehavior('Timestamp');
        $this->belongsTo('Chapters', [
            'foreignKey' => 'chapter_id'
        ]);
        $this->belongsTo('Events', [
            'foreignKey' => 'event_id'
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->add('id', 'valid', ['rule' => 'numeric'])
            ->allowEmpty('id', 'create')
            ->requirePresence('name', 'create')
            ->notEmpty('name')
            ->allowEmpty('description')
            ->allowEmpty('link')
            ->add('sequence', 'valid', ['rule' => 'numeric'])
            ->allowEmpty('sequence')
            ->add('chapter_id', 'valid', ['rule' => 'numeric'])
            ->requirePresence('chapter_id', 'create')
            ->notEmpty('chapter_id')
            ->add('event_id', 'valid', ['rule' => 'numeric'])
            ->requirePresence('event_id', 'create')
            ->notEmpty('event_id');

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules)
    {
        $rules->add($rules->existsIn(['chapter_id'], 'Chapters'));
        $rules->add($rules->existsIn(['event_id'], 'Events'));
        return $rules;
    }
}
